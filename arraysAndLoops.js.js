list = [];
function manage(input) {
    let inputArr = input.split('Item: ');
    switch (input.charAt(19)){
        case "1": // Add item
            list.push(inputArr[1]);
            break;
        case "2": // Remove item  
            for (let i = 0; i < list.length; i++) {
                if (list[i] === inputArr[1]) {
                    list.splice(i, 1)}
                else {
                    continue
                }
            }
            break;
        case "3": // Display list
            console.log(list)
            console.log()
            break;            
        case "4": // Exit
            console.log(`Your Final Shopping List:`);
            for (let i = 0; i < list.length; i++) {
                console.log(i + 1 + ". " + list[i])
            }
            console.log('"Thanks for using this algorithm!" —Rymer')
            break;
    }
}
// -------------------------------------------------- //

/*
    Welcome to the Shopping List Manager!

    Actions:
    1   Add item
    2   Remove item      
    3   Display list
    4   Exit

    Instructions: > Refer to the actions listed above.
                  > Only edit/input AFTER the colon and space of each line.
                  > If you want to perform another action, copy this block of code ONLY:
                      
input = `Enter your action: #
         Item: ITEM `
manage(input)

                    After copying, you must paste it BELOW the other inputs.
                  > Ending with action 4 "Exit" is recommended.

*/

let input;
// (Example code written by Rymer. Remove if you want to try it yourself!)
input = `Enter your action: 1
         Item: Apples`
manage(input)

input = `Enter your action: 1
         Item: Bananas`
manage(input)

input = `Enter your action: 1
         Item: Oranges`
manage(input)

input = `Enter your action: 3
         Item:`
manage(input)

input = `Enter your action: 2
         Item: Bananas`
manage(input)

input = `Enter your action: 3
         Item:`
manage(input)

input = `Enter your action: 4
         Item:`
manage(input)