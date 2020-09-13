# TSExercices
Exercices pratiques de codes en Typescript

Version de node 
Version de type script 
Version de ts-node


Compiler les exercices avec ts-node : 
Pour compiler les exercices il suffit d'éxécuter la commande ts-node <nomdufichier> dans le terminal de commande
lien :
  
Compiler les exercices avec typescript : 
Il est aussi possible de transpiler les fichiers typescript en js en ajoutant un fichier ts.config et en indiquant la version cible du javascript. 
lien : 

Débuguer avec visual studio code du typescript : 
Pour débugguer du typescript il suffit de rajouter une option dans le fichier ts.config
lien : 

# Git commands 
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

Important ! 
Lorsqu'on modifie des fichiers sur une branche, il faut committer l'intégralité des changements sur la branche puis mergé. 
Si on modifie des fichiers sur une branche puis qu'on ne commit qu'une partie des modifications, qu'ensuite on stash les changements et qu'on se place sur une autre branche, qu'on effctue un stash pop. Nous allons avoir un problème de merge avec les fichiers concernés.
Il faut donc impérativement lorsqu'on est sur une branche de modifier que les fichiers qui font sens et qu'on va ensuite commit sur cette branche (ex une feature) puis ensuite la merger sur la branche parente. 


