// terminal and bash shortcuts and functions

const { label } = require("motion/react-client")

// terminal is nothing but another interface to do things in your machine
1. pwd (print working directory)
// base directory of your system (path to my currrent folder)
2. cd (change directory)
// cd to go in a folder,
// cd.. to come out of a folder(one folder before the current folder)
// cd../.. will take out 2 folders behind
3. ls (listing all the files in the current folder)
// gives out a list of every file in folder
// desktop/ ls => every document
4. mkdir (make directory)
// make new folders
5. touch (lets you create an empty file)
6. cat (prints the content of the files)
// cat index.txt
7. vi (vim)
// popular editor used for coding btw
8. mv (move your file)
// mv a2.txt new-folder/
9. cp (copy)
// copy files
// folder cant be copy
// cp test2 tes3
10. nvm (node version manager)
11. npm (node package manager)
// manage external depandenices ex. express
// npm install array
12. node(compile a js file)







// bash commands
bash: a command line interpreator language

// to recursivly make directories
// mkdir -p frontend/scripts
// mkdir -p frontend/html
// mkdir -p frontend/css

// renaming a file
// ex mv script.js runtime_script.js

rm (remove)
//deleting a file
rm -r (remove a directory)
// deleting a directory

chmod (change file permissions)
// modify the read, write and execute permissions of a file
ugo-r,w

// display something
echo 'lol'

first ten rows of file
// head a.txt

last ten rows of file
// tail a.txt

pipe operator
commadn 1 | command 2
// whatever command comes from command 1 flows to command 2


grep
// helps to find recurance of particular word or phrase
// grep -h gives all the matched line
// grep -hi "one". will check the whole directory

ls -la
// list all the files in the directory with all the details

ls -s
// list all the files in the directory with their size

ls -la /sub-directory
// list all the files in the sub-directory with all the details

ls -iR | grep "file_name"
// list all the files in the directory with all the details and then search for a particular file

ls *.json
// list all the files with .json extension

ls Zoo*
// list all the files starting with Zoo

ls *Zoo*
// list all the files containing Zoo

cat indexedDB.html
// print the content of the file

mv index.js index.js.bak
// rename the file

ls -R | grep "index.js"
// list all the files in the directory with all the details and then search for a particular file

mkdir -p frontend/scripts
// create a directory
mkdir -p frontend/index.html
// create a directory

mv file1   file2
// change location of file

cp file1 file2
// copy file1 to file2

chmod u+x file1 
// give user execute permission

chmod g+wx file2
// give group write and execute permission

chmod u-x file2
// remove user execute permission

wc file1
// count the number of lines, words and characters in a file

grep 'one' file1
// search for a word in a file
