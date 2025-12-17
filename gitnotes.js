const { platform } = require("node:os")
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