# TSExercices
Exercices pratiques de codes en Typescript

Permet aussi de pratiquer l'organisation des branches sur git 
https://git-scm.com/book/fr/v2/Les-branches-avec-Git-Branches-et-fusions%C2%A0%3A-les-bases

git branch dev 
git checkout dev
git branch LinkedLists 
git checkout LinkedLists
=> some dev 
git add ...
git commit -m 'new dev'
git push -> fatal: The current branch Linkedlists has no upstream branch.
To push the current branch and set the remote as upstream
git push --set-upstream origin Linkedlists
git checkout dev
git merge LinkedLists 
git push -> fatal: The current branch Linkedlists has no upstream branch.
To push the current branch and set the remote as upstream
git push --set-upstream origin dev


