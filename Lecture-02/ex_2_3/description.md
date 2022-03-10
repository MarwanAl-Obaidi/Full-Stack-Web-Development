# Exercise 3

There are two parts in this exercise. we will start with practicing basics of git commands. In part B, we will modify the HTML page of Ex2 and commit the changes

## Part A

### Set up

    $ git config --global user.name "Your Name"
    $ git config --global user.email "your@email.com"
    $ git config --list

### Create a Repository

    $ cd Ex2
    $ git init
    $ ls -a
    
    $ git status

### Track Changes to Files

    $ git add .
    $ git status
    
    $ git commit -m "My message"
    
    $ git status
    $ git log


Changes are saved in the `.git` folder.

### Change a File

Edit bio-starter.html in vscode

Add  another paragraph using `p>lorem` Emmet

    $ git status
    $ git diff
    $ git commit -m "Added a paragraph"

## Part B
Refactoring is the process of modifying programs to improve program structure without changing functionality. 

Refactor the page that you designed in exercise 2, to use semantic elements e.g
- A header
- A main content area
- A footer containing copyright information and credits.

commit your changes and add a meaningful message

## ref
- https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup
- https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository
- https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository

- https://git-scm.com/book/en/v2
- https://www.w3schools.com/git/default.asp
