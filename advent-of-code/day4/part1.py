def countValidPasswords(minNum, maxNum):
    validCount = 0
    for num in range(minNum, maxNum + 1):
        numStr = str(num)
        isIncreasing = True
        hasDoubles = False
        for j in range(len(numStr) - 1):
            if int(numStr[j]) > int(numStr[j + 1]):
                isIncreasing = False
            elif int(numStr[j]) == int(numStr[j + 1]):
                hasDoubles = True
        if isIncreasing and hasDoubles:
            validCount += 1
    
    return validCount

if __name__ == "__main__":
    minRange = 248345
    maxRange = 746315
    
    print(countValidPasswords(minRange, maxRange))