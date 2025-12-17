const { request } = require("node:http")
const { platform } = require("node:os")
const { backup } = require("node:sqlite")
const { fileURLToPath } = require("node:url")

repositery = like a folder where git keeps everything

main branch = er blevet det globale konvention

branches = paralellet eksisterende grene af dit projekt

'git status' = tells branch, commits and untracked files

'git add [filename]' = makes git track that fil

'git add ./' = tracks whole folder and all files

'git commit -m "messeage"' = commits all changes and adds discriptive messeages

'git commit -a -m "message"' = kombinere git add og git commit -m 

'git log' = shows history of all commits 
            - shows commitID, author, message and Date

----------------        how   to    restore    older   copies  ----------
to restore older versions 
1. copy CommitID/commitHash found by git log
2. exit git log by 'q'
3. 'git checkout [commitHash]'
og tadar du er tilbage i en ny branch fra din gamle version uden at have slettet noget 
for at går tilbage brug: 
'git checkout main'
eller 
'git checkout -f main' for at discard change lavet efter første skift 


------------------------           GIT HUB         ---------------------------------
- Cloud platform that allows us to store your git repositories online 
- and collaborate with others

    HOW TO PUSH YOUR REPOSITORY TO GITHUB
- link repository to your remote 
remote repository = a version of a project stored on a server like GITHUB

when working on a team everybody will have a local repository and all share one remote repository

'git remote add origin [remotelink]' = connects local repo to remote repo 

origin now links to remotelink

'git push -u origin main' = tilføjer local repo til remote

if error just google or chatgpt

---------------------     Branching    and    merching        ---------------------------
branches allows to create different versions of project
-> like creating a copy a specific moment in time 
-> that wont effect original 

later can copy branches merges into main branch 

'git branch [newbranchName]' = creates a new branch

'git chechout [branch name]' = switches to new branch (always comeback by checkout main)
-----> shortcut to do both ===  'git checkout -b [newbranchName]'
-> new Branch names should be short and explain expected changes

new branches inherence from the branch you create it so not nessisarily main branch
'git branch [newbranchName] [source branch]' = makes a new branch but from an selected branch/source 

TRACKING RELATIONSHIP WITH REMOTE AND NEW BRANCH :
either: 
'git push --set-upstream origin [branch]'
or
'git push -u origin [branch]'
-> Det betyder, at Git ved, hvor den skal push’e og pull’e til/fra fremover

'git pull' = merger changes from remote repo into local repo for that branch

to merge in remote repo follow pull request in github webapp 
-> doesnt merge in local repo 
-> therefor you should pull from remote repo: 
'git pull' = pulls the repo from remote 

--------------------------    the step by step structure you should follow  ------------------
1. clone the repo 

2. create a new branch

3. make changes 

4. push branch to remote repo

5. open a pull request 

6. merge the changes on remote 

7. pull the merged changes into local main

8. repeat 


----------------            RESOLVING MERGE CONFLICTS         ----------------------------------
merge conflict == if 2 or more developers edit the same line code git will get confused
-> this makes you unable to merge both pull request

so you have to resolve conflict MANUALLY 

WHAT TO DO TO RESOLVE MANUALLY??
1. checkout to the main branch
2. pull the latest/friends changes from remote repo (aka pull the conflicting changes)
3. check out to your branch (with your changes)
4. 'git merge main' merge main into your branch/aka the branch head is in 
5. then correct code by comparring and picking

-----------------------       advanced git    ------------------------------------
GIT SAVIOR COMMANDS:
- lets you manage changes, undo mistakes and tweek commit history aka backup
'git reset [standpunkts commithash]' = removes the commits of the working trejctery aka 'git reset --mixed'
    - but not the changes
    - first checkout to the last commit you want to commit
'git reset --soft [commithash]' = changes later commits to stage mode, used if you commit to early. 

'git reset --hard [commithash]' = sletter commits og fil ændringer.

--soft   : kun commit
--mixed  : commit + staging
--hard   : commit + staging + filer


'git revert [commithash]' -> shows a mini merge conflict -> now you can change lines 
---------> after sæt changes to staging (git add .) -> 'git revert --continue'-> ':qa!'
======= now you still have the same commits but the code changed 

'git stash' = saves a version without commiting -> now you can go work on somethingelse 
------>  and comeback later

'git stash list' = shows list of all your stashes + their names = fx 'stash@{0}'

'git stash apply [stashName]' = reestablishs your stash changes -> might course merge conflict

----------------------------------      