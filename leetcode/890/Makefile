CC = g++
CFLAGS = -Wall -Wextra -O2 -g
LDFLAGS = -lm
SRC = optimised.cpp
OBJ = $(SRC:.cpp=.o)
TARGET = optimised

.PHONY: all clean
all: $(TARGET)
$(TARGET): $(OBJ)
	$(CC) $(CFLAGS) -o $@ $^ $(LDFLAGS)
%.o: %.cpp
	$(CC) $(CFLAGS) -c $< -o $@
clean:
	rm -f $(OBJ) $(TARGET)

test: $(TARGET)
	./$(TARGET) < input.txt > output.txt
