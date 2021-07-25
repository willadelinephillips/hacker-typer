export const phrases = () => {

    let hackerphrases = [

        "Hacking the mainframe",
        "Encoding the database",
        "Decoding the file formatting"
    
    ]

    return hackerphrases[Math.floor(Math.random() * hackerphrases.length)];
}