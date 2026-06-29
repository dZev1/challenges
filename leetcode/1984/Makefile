CC = g++
CFLAGS = -Wall -Wextra -O2
LDFLAGS = -lm
SRC = main.cpp
OBJ = $(SRC:.cpp=.o)
TARGET = main

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