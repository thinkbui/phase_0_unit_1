## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
<!-- Your defnition here -->
The "add" command makes the file or files listed in the parameters for the command tracked in the repository.

#### branch
<!-- Your defnition here -->
The "branch" command splits the version auditing into a new audit trail so that changes in the new trail do not affect changes in the old trail until the trails are merged again.

#### checkout
<!-- Your defnition here -->
The "checkout" command indicates which branch any other commands should query or make changes to.

#### clone
<!-- Your defnition here -->
The "clone" command takes an existing repository and recreates it in a duplicate location.

#### commit
<!-- Your defnition here -->
The "commit" command takes any tracked files that have changed and saves them as new versions of those files in the repository without overwriting the old versions.

#### fetch
<!-- Your defnition here -->
The "fetch" command is almost the same as the "pull" command in that it retrieves the latest versions of track files from another repository, but instead of updating the current working branch, it stores these files in a separate directory for review without impacting local versions.

#### log
<!-- Your defnition here -->
The "log" command produces a complete list of commits that were made in the repository.

#### merge
<!-- Your defnition here -->
The "merge" command takes the changes from the indicated branch and applies them to the current working branch.

#### pull
<!-- Your defnition here -->
The "pull" command takes the latest version of files from a remote repository and updates them in the local repository.

#### push
<!-- Your defnition here -->
The "push" command takes the latest version of files from the local repository and upates them in the remote repository.

#### reset
<!-- Your defnition here -->
The "reset" command reverts changes to an older version of the tracked files.

#### rm
<!-- Your defnition here --> 
The "rm" command changes files listed in the parameters to no longer be tracked by the repository.

#### status
<!-- Your defnition here --> 
The "status" command list the files in the directory that are either not track or are pending commit.


## Release 4: Git Workflow

- Push files to a remote repository
	* From the command line, first you need to move the files to staging by running "$ git add ." and that will move all the modified files in the CWD and its subdirectories to stage.
	* Next would be to commit the staged files to the local repository by running "$ git commit -m [comment]".
	* Finally the changes can be synchronized with the remote repository by running "$ git push".
- Fetch changes
	* If you just need to fetch the files without merging them locally, you can run "$ git fetch" and the files that have been modified remotely will be downloaded into a separate directory.
	* If you want to synchronize changes that happened remotely with your local repository, you can run "$ git pull".
- Commit locally
	* The first two steps of pushing to the remote repository are what you need to commit locally, first by running "$ git add ." to move all modified files to staging, then running "$ git commit -m [comment]" to commit them to the local repo.

## Release 5: Reflection
I've worked with command line version control quite a bit in formal education using CVS, but it's been a while, so I've been long out of practice and the last couple of weeks I had been using the GitHub app since the GUI interface is much more intuitive in a rush than a command line interface.  Working from the app does help the novice like I effectively was last week, but I expect in professional environments, there may be situations where GUI tools are unavailable, so experience working with command line would be helpful.  Also the GUI interface had been disconnecting me with the staging step, which may be useful in the future.