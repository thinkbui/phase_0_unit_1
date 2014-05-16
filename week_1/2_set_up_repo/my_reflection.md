## 2. [Open Source and Repo Setup](2_set_up_repo/readme.md) Reflection

* Explain how to create a repository on GitHub and clone the repository to your local computer to a non-technical person
* Describe what open source means
* What do you think about Open Source? Does it make you nervous or protective? Does it feel like utopia?
* Assess the importance of using licenses
* What concepts were solidified in the challenge? Did you have any "aha" moments? What did you struggle with?
* Did you find any resources on your own that helped you better understand a topic? If so, please list it.

<!-- Add your reflection here. Remove the comment markers -->
Creating a repository is the simple matter of using the repository creation form page on GitHub's website and giving it the amount of privacy and license you want depending on how much you want to share it.  After that form is completed and submitted, the repository should be created.  To copy it locally, you need to go to the desktop app, click on the GitHub account you created that repository with, then click "CLONE" next to that repository as it appears in the list.

Open source essentially means that the source code is open and accessible to the public and the public is granted certain rights on what they can do with that source code.

I have mixed feelings about open source.  On one hand, it's great to have that for an open forum on software development and the web community can help improve it.  However on the other hand, having more people independently work on it instead of an organized team makes it a lot harder for quality control leaving good versions susceptible to being lost in a sea of poor versions.

Licenses explicitly state what the public can and/or can't do with the code.  It's important to protect the owner of the code in situations such as if an end-user modifies the code to a poor implementation that causes damage.  In that situation, an MIT license for example would prevent the end-user from suing the owner of the code.

I was a little bit more at ease that my rushed setup of my development environment was implemented correctly at least for this exercise.  Other than the specific tool, nothing in it was unfamiliar to me with my prior experience with CVS, SVN, and IBM Rational ClearCase.  I did screw up as I missed the step requiring the repository to be under the MIT license, but I managed to delete the original repository I created and create a new one with the appropriate license, then resync the desktop app with the new one.

The only other resources, besides prior experience, was the StackOverflow forum I consulted on fixing a GitHub repository license.  The information allowed me to determine that I needed to delete and recreate the repository as there is no way to change the license of an existing repository.
http://stackoverflow.com/questions/20243214/is-there-any-way-to-change-the-license-under-which-a-project-at-github-has-been
