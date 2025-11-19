package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	if scanner.Scan() {
		input := strings.TrimSpace(scanner.Text())

		haySol := HaySolucion(input)
		// Tu lógica aquí
		if haySol {
			fmt.Println("S")
		} else {
			fmt.Println("N")
		}
	}
}

func HaySolucion(text string) bool {
	pila := []rune{'T', 'A', 'P'}
	for _, letra := range text {
		if letra == pila[0] {
			pila = pila[1:]
		}
		if len(pila) == 0 {
			return true
		}
	}
	return false
}
