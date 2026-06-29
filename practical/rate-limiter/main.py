from collections import deque

class RateLimiter:
    """
    A rate limiter tracks requests made by each user and ensures they
    do not exceed a configured number of requests within a given time window.
    When a request arrives, it should determine whether the user is still within
    their limit and either allow or reject the request
    """

    requests: dict[str, deque[int]]
    max_requests: int
    window_seconds: int

    def __init__(self, max_requests: int, window_seconds: int):
        if window_seconds <= 0 or max_requests <= 0:
            raise ValueError("Values `window_seconds` and `max_requests` should be positive numbers.")
        self.max_requests = max_requests
        self.requests = {}
        self.window_seconds = window_seconds

    def allow(self, user_id: str, timestamp:int) -> bool:
        if timestamp <= 0:
            return False

        if user_id not in self.requests:
            self.requests[user_id] = deque()

        user_reqs = self.requests[user_id]
        min_time = max(0, timestamp - self.window_seconds)

        while user_reqs and user_reqs[0] < min_time:
            user_reqs.popleft()

        if len(user_reqs) < self.max_requests:
            user_reqs.append(timestamp)
            return True

        return False

def test_rate_limiter_5_seconds_3_requests():
    rl = RateLimiter(3, 5)
    assert rl.allow("quack_overflow", 1) == True
    assert rl.allow("quack_overflow", 2) == True
    assert rl.allow("quack_overflow", 4) == True
    assert rl.allow("quack_overflow", 5) == False
    assert rl.allow("quack_overflow", 7) == True

def test_rate_limiter_negative_requests_throws_error():
    try:
        rl = RateLimiter(-2,4)
        assert False, "ValueError expected due to negative max_requests"
    except ValueError:
        pass

def test_rate_limiter_negative_time_throws_error():
    try:
        rl = RateLimiter(2,-4)
        assert False, "ValueError expected due to negative window_seconds"
    except ValueError:
        pass

def test_rate_limiter_negative_timestamp_not_allowed():
    rl = RateLimiter(2,10)
    assert rl.allow("hachimi", -2) == False
    assert rl.allow("hachimi", 3) == True
    assert rl.allow("hachimi", 5) == True
    assert rl.allow("hachimi", 7) == False

