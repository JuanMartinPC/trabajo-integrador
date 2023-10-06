def Find_Boomerang(array):
    groups = []
    final_array = []
    first = 0
    third = 3

    if type(array) != type(groups):
        return 'This function requires a list of numbers'
    else:
        for i in range(len(array)):
            try:
                groups.append(array[first:third])
                if groups[0][0] == groups[0][2]:
                    final_array.append(groups[0])
                    groups.clear()
                elif groups[0][0] != groups[0][2]:
                    groups.clear()

                first += 1
                third += 1
            except IndexError:
                break
    return print(f'Boomerangs finded: {final_array}')

Find_Boomerang([1, 3, 5, 2, 6, 7, 6, 7, 2, 4, 8, 4, 2, 2, 4, 2, 1, 0, 1])