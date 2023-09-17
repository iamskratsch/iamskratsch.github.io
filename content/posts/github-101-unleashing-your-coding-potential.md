---
title: "GitHub 101: Unleashing Your Coding Potential"
date: 2023-09-17T15:00:00Z
image: /images/post/github_101.png
categories: ["git", "github","beginner"]
featured: false
draft: false
---

If you are a coder, you have probably heard of [GitHub](https://www.github.com), the world's largest platform for hosting and collaborating on code. GitHub is used by millions of developers, from hobbyists to professionals, to share their projects, learn from others, and contribute to open-source software. But what exactly is GitHub and how can you use it to improve your coding skills?

GitHub is a web-based service that allows you to store your code in online repositories, which are like folders for your projects. You can create your own repositories or fork (copy) existing ones from other users. You can also use GitHub to track the changes you make to your code, collaborate with other developers, and integrate with various tools and services.

In this article, we will guide you through the basics of GitHub and show you how to set up your account, create your first repository, make changes to your code, collaborate on projects, and more. By the end of this article, you will have a solid foundation of GitHub and be ready to unleash your coding potential. Let's get started!

## Understanding GitHub

GitHub is more than just a website; it's a platform that brings developers together to work on code collaboratively. At its core, GitHub is a Git repository hosting service, but it also provides many other features such as bug tracking, feature requests, task management, and wikis for every project.

### It All Starts With Git

Understanding GitHub begins with understanding Git. Git is an open-source distributed version control system that allows multiple people to work on a project at the same time without overwriting each other's changes. It keeps track of all changes made to the code in a repository, allowing you to revisit earlier versions of your work and find out what changed, who changed it, and why.

### Repos - Not The Repo Man

 In GitHub, all code lives in repositories (or 'repos' for short). A repository is like a folder for your project that contains all of the project's files and stores each file's revision history. Repositories can also have multiple collaborators and can be either public or private.

### Branches - Like a Tree

Branches are an important part of the GitHub workflow. They represent independent lines of development within a repository. Instead of committing your changes directly to the main (master) branch, you can create a separate branch to work on updates or new features. Once your changes are ready, you can open a pull request to merge your branch into the main branch.

![GitFlow Branching Image](/images/post/github_gitflow.png)

### Commits - Don't Be Afraid of Commitment

Commits are the heartbeats of a project's life on GitHub. Each commit is like a snapshot of your work that you can return to at any time. When you commit changes, you should include a commit message describing what was changed and why. This not only creates a clear history of a project but also helps other contributors understand your thought process.

### Pull Requests - Time to Start Pulling Your Weight Around Here

Pull requests are requests to merge your branch with another branch. You can use pull requests to review, discuss, and approve code changes before they are added to the main branch. Pull requests also trigger automated tests and checks to ensure the quality of your code.

### Issues - Do You Need a Tissue for Your Issue?

Issues are problems or suggestions related to your code project. You can use issues to report bugs, request features, ask questions, or give feedback. You can also assign issues to yourself or other collaborators, add labels and milestones, and link them to pull requests or commits.

### Wikis - Say It With Me: Wiki Wiki Wiki Wiki

Wikis are web pages that document your code project. You can use wikis to provide information, instructions, examples, or resources for your project. Wikis are editable by anyone who has access to your repository.

### GitHub Pages - Your Chance to Shine

GitHub Pages are websites that host your code project online. You can use GitHub Pages to showcase your work, create a portfolio, or publish a blog. GitHub Pages are free and easy to set up using Markdown or HTML.

## Setting Up Your GitHub Account

The first step to getting started with GitHub is setting up an account. Visit the GitHub website and click on the 'Sign Up' button. You'll need to provide a username, email address, and password. You'll also need to complete a quick security check to verify that you're not a robot.

1. Open a browser and **navigate to github.com**, or simply [click on this link](https://www.github.com)
  ![GitHub Home Page](/images/post/github_homepage.png)

2. **Click on the "Sign Up" button**
  ![GitHub Sign Up](/images/post/github_signup.png)

3. **Enter your details** (username, email address, password)
  ![GitHub User Details](/images/post/github_userdetails.png)

4. You'll need to **complete a verification** that you are human
  ![GitHub Human Verification](/images/post/github_humanverification.png)

5. Click **Create Account**
  ![GitHub Create Account](/images/post/github_createaccount.png)

### Tips on setting up a strong profile.

A strong GitHub profile can be a great asset, especially for developers. It can help you showcase your work, contribute to open-source projects, and even land your dream job. Here are some tips on how to set up a strong GitHub profile.

**1. Choose a Professional Username**

Your username is one of the first things people see on your GitHub profile. Choose a username that is professional and represents you well. It could be your full name, initials, or a combination of your name and profession.

**2. Add a Clear Profile Picture**

A clear and professional profile picture can make your GitHub profile more personal and relatable. It doesn't necessarily have to be a headshot; it could be any image that represents you and your work.

**3. Write a Compelling Bio**

Your bio is a great place to share a little about yourself, your skills, and what you're currently working on. Keep it concise, but don't be afraid to show your personality.

**4. Include Your Location and Website**

Adding your location can help you connect with local developers and opportunities. If you have a personal website or portfolio, including it in your GitHub profile can provide more context about your work and experiences.

**5. Showcase Your Best Repositories**

GitHub allows you to pin up to six repositories to your profile. Use this feature to showcase your best and most relevant work. Make sure these repositories are well-documented with clear README files.

**6. Contribute to Open Source Projects**

Contributing to open-source projects can demonstrate your coding skills and collaboration abilities. It also shows that you're active in the developer community.

**7. Keep Your Activity High**

A high activity level shows that you're consistently working on projects. Try to commit code regularly, even if it's just small updates or fixes.

**8. Follow Relevant Users and Projects**

Following other users and projects can help you stay updated with the latest trends and technologies in your field. It also shows that you're engaged with the GitHub community.

Setting up a strong GitHub profile takes time and effort, but it's worth it. A well-crafted GitHub profile can showcase your technical skills, demonstrate your passion for coding, and help you stand out in the developer community.

## Creating Your First Repository

Creating a new repository on GitHub is a straightforward process. Here's a step-by-step guide:

**Step 1:** Log in to your GitHub account.

**Step 2:** Click on the '+' icon at the top right corner of the GitHub homepage, then select 'New repository'.
  ![GitHub New Repo](/images/post/github_newrepo.png)

**Step 3:** You'll be directed to a new page where you can set up your repository. Start by giving your repository a name. It should be short and memorable.

**Step 4:** Write a brief description of your repository in the 'Description' box. This will help others understand what your project is about.

**Step 5:** Choose whether to make your repository public or private. Public repositories are visible to everyone, while private repositories are only visible to you and people you choose.

**Step 6:** Optionally (but recommended), you can choose to initialize your repository with a README file by checking the box next to 'Initialize this repository with a README'. More on README files [here](https://docs.github.com/github/creating-cloning-and-archiving-repositories/about-readmes)

**Step 6b:** Optionally, if you are going to be developing in a tool such as Visual Studio or VS Code, you may want to have GitHub generate an appropriate .gitignore file to tell Git what to ignore when tracking changes to your code. More about ignoring files [here](https://docs.github.com/github/using-git/ignoring-files)

**Step 6c:** Optionally, you can choose a license to apply to this particular repo. You can do this later, and you can also change the license if you change your mind later. More about licenses [here](https://docs.github.com/github/creating-cloning-and-archiving-repositories/licensing-a-repository)
    ![GitHub New Repository Details](/images/post/github_newrepositorydetails.png)

**Step 7:** Click on 'Create repository' to finish the process.
    ![GitHub Create Repository Button](/images/post/github_createrepositorybutton.png)

Now, let's talk about README files and their importance.

A README file is essentially a manual for your project. It tells others why your project is useful, what they can do with your project, and how they can use it. A well-written README file can make your project more attractive and user-friendly.

Here's what you should include in your README file:

- **Project Title:** Your project's name.
- **Description:** A brief description of what your project does.
- **Installation Instructions:** Detailed instructions on how to install and set up your project.
- **Usage Instructions:** Instructions on how to use your project after installation.
- **Contributing Guidelines:** If you want others to contribute to your project, provide guidelines on how they can do so.
- **License Information:** If applicable, include information about the license under which your project is released.

Remember, a good README file can make a huge difference in how others perceive and interact with your project. So take the time to make it informative and easy to understand!

## Making Changes: Branches and Commits

In GitHub, all code lives in repositories. But what makes GitHub powerful is its support for version control — the ability to track changes to code and facilitating collaboration. This is where branches and commits come in.

### Branches

Branches help you work on different versions of a repository at the same time. By default your repository has one branch named `main` which is considered to be the definitive branch. We use branches to experiment and make edits before committing them to `main`.

**Creating Branches: A Step-by-Step Guide**

1. Go to your new repository.

2. Click the drop down at the top of the file list that says `branch: main`.
    ![GitHub New Branch](/images/post/github_newbranch.png)

3. Type a branch name into the new branch text box.

4. Select the blue **Create branch** box or hit "Enter" on your keyboard.
  ![GitHub Create Branch](/images/post/github_createbranch.png)

Now you have two branches that look exactly the same, but not for long! Next, we'll show you how you can make changes to your new branch.

### Commits

A commit, or "revision", is an individual change to a file (or set of files). When you make a commit to save your work, GitHub creates a unique ID (a "SHA" or "hash") that allows you to keep record of what changes were made when and by who. Commits usually contain a commit message which is a brief description of what changes were made.

**Creating Commits: A Step-by-Step Guide**

1. Navigate to the repository on GitHub.

2. Browse to the file you want to change.

3. Click the pencil icon in the upper right corner of the file view to edit.
   ![GitHub Edit File On Site](/images/post/github_editfile.png)

4. Make your changes to the file.

5. Scroll down and describe your changes in the "Commit changes" box.

6. Click "Commit changes".
   ![GitHub Commit Changes](/images/post/github_commitchanges.png)

#### Importance of Commit Messages

Commit messages are crucial as they provide a log of the changes made as well as context about those changes for other developers and your future self. Good commit messages can help find bugs or understand why past-you made certain code decisions.

**Best Practices for Commit Messages**

1. **Keep them concise but informative:** A good commit message should be able to complete this sentence: "If applied, this commit will..."
2. **Use present tense:** For example, use "Add feature" instead of "Added feature" or "Adds feature".
3. **Include the why not just what:** While it's useful to know what changes were made, it's even more useful to know why they were made.

> Remember, good commits and well-managed branches will make it much easier for others (and you) to understand what's happening with your project and why.

## Collaborating on Projects

Collaboration is at the heart of GitHub - it's built into the platform's DNA. GitHub provides several tools to aid collaboration among coders, making it easier to contribute to projects and maintain a high level of code quality. Two of the most important tools in this regard are Pull Requests and Forks.

### Pull Requests

Pull Requests are a key feature of GitHub and they are used when you want to contribute code to another user's repository. After forking and cloning the repository, you can make changes to the code and then submit these changes as a Pull Request.

Here's how you can create a Pull Request:

1. Navigate to the original repository you created your fork from.

2. Click on the **Pull request** button at the top of the repository.
   ![GitHub Pull Request](/images/post/github_pullrequest.png)

3. Click on the **New Pull Request** button

4. Click the dropdown button labelled **base** and select the branch of the original repository you'd like to pull changes into.

5. Click the dropdown button labelled **compare:**, and select the branch on your repository with the changes you'd like to submit.
   ![GitHub Pull Request Details](/images/post/github_pullrequestdetails.png)

6. Click **Create pull request**.

7. Fill in the details of your pull request, and click **Create pull request** again.
   ![GitHub Create Pull Request](/images/post/github_createpullrequest.png)

### Forks

A fork is a copy of a repository that sits in your account rather than the account from which you forked it from. It isolates your changes from the original project, enabling you to experiment freely without affecting the original project.

Here's how you can create a Fork:

1. Navigate to the repository you want to fork.

2. Click on the **Fork** button at the top right of the repository.
    ![GitHub Fork](/images/post/github_fork)

3. Select your GitHub account as the location for the fork.

4. Once you've created a fork, you can make changes to it without affecting the original repository. If you want to propose your changes to be merged into the original repository, you can create a pull request.
   ![GitHub Fork Details](images/post/github_forkdetails.png)

Collaborating on projects is a key aspect of using GitHub, and understanding how to effectively use Pull Requests and Forks is crucial for contributing to open-source projects or collaborating on private projects. By mastering these tools, you can become a more effective and productive developer.

## Navigating the GitHub Interface

GitHub's interface is designed with simplicity and ease-of-use in mind, making it accessible for both beginners and experienced developers alike. This article will guide you through some of its main features.

### The Home Page

When you first log in, you'll be taken to your dashboard. Here, you'll see a feed of recent activity from repositories you're watching or contributing to, as well as recommendations for popular repositories.

On the left side of your dashboard, there's a sidebar with links to your profile, repositories, teams, organizations, and settings.
![GitHub Dashboard](/images/post/github_dashboard.png)

### Your Profile Page

Clicking on your profile picture in the top right corner will take you to your profile page. Here, you'll see an overview of your public contributions, repositories, followers, following, and starred repositories.

You can edit your profile by clicking on 'Edit profile' button located under your profile picture.

![GitHub Profile Page](/images/post/github_profile.png)

### Repositories

Clicking on 'Repositories' from either your dashboard sidebar or profile page will take you to a list of all your repositories. You can sort them by name, recently updated or stars.

To create a new repository, click on 'New' button located next to 'Repositories' heading.

![GitHub Repositories](/images/post/github_repositories.png)

While this section covers some basic aspects of navigating through GitHub's interface, there's still much more to explore! As always with any new tool or platform, don't be afraid to click around and explore - there's plenty more features waiting for discovery.

## Leveraging GitHub for Career Growth

In today's digital age where software development has become increasingly collaborative and open-source software has taken center stage, having a strong presence on platforms like GitHub has become crucial for career growth in tech-related fields. Here are some ways in which leveraging GitHub can boost your career growth:

### Showcase Your Work

GitHub serves as an excellent platform for showcasing your work to potential employers. By pushing your code to GitHub, you're not only maintaining a backup of your work but also letting others see what you're capable of. This can be particularly useful when you're applying for jobs or looking to collaborate with other developers.

### Contribute to Open Source Projects

Contributing to open-source projects on GitHub can significantly boost your career growth. It allows you to work on real-world projects, which can help you gain practical experience and improve your coding skills. Moreover, it shows potential employers that you're proactive, enjoy problem-solving, and are capable of working as part of a team.

### Networking and Collaboration

GitHub is not just a place to store code; it's also a social network for developers. By following users, contributing to their projects, or even just studying their code, you can learn a lot and make connections within the developer community. These connections could lead to collaborations, job opportunities, or simply help you grow as a developer.

### Continuous Learning

The field of technology is always evolving, and GitHub is a great place to stay updated with the latest trends and technologies. By exploring popular repositories and following influential developers, you can keep learning and stay ahead in your career.

### Building Your Personal Brand

Lastly, GitHub allows you to build your personal brand as a developer. By consistently working on interesting projects, contributing to open-source software, and engaging with other users, you can establish yourself as an expert in your field.

GitHub is more than just a tool for version control; it's a platform that can open doors to numerous opportunities and accelerate your career growth. So start leveraging GitHub today and take your career to new heights

## Common Mistakes and How to Avoid Them

While GitHub is an incredibly powerful tool for managing software projects, it's also complex and nuanced. Here are some common mistakes people make when using GitHub and how you can avoid them:

**1. Not Using Version Control**

One of the biggest mistakes beginners make is not using version control from the start of their projects. Version control is essential for tracking changes, understanding what each change accomplishes, and reverting changes if necessary.

**How to Avoid:** Always initialize a Git repository when starting a new project. Make regular, atomic commits with clear messages describing what each commit does.

**2. Poor Commit Messages**

Commit messages are crucial for understanding the history of a project. Vague or unclear commit messages can make it difficult for others (and future you) to understand why certain changes were made.

**How to Avoid:** Be clear and descriptive in your commit messages. Explain what you did and why, as if you were explaining it to another person.

**3. Not Using Branches**

Branches are a key feature of GitHub that allow you to work on different features or fixes without affecting the main codebase.

**How to Avoid:** Use branches for each new feature or fix. This keeps your code organized and makes it easier to track changes and find bugs.

**4. Overlooking Documentation**

Good documentation makes your code easier to understand and use. Neglecting documentation can lead to confusion and misuse of your code.

**How to Avoid:** Always document your code. Use README files, comments, and wikis to explain what your code does, how to use it, and any dependencies or requirements it has.

**5. Ignoring Community Guidelines**

Every open-source project on GitHub has a community with its own rules and guidelines. Ignoring these can lead to conflict and your contributions being rejected.

**How to Avoid:** Always read the community guidelines for a project before contributing. Respect the rules and norms of the community.

Remember, everyone makes mistakes when they're learning something new. Don't be discouraged if you make mistakes on GitHub. Instead, see them as learning opportunities.

## Final Thoughts

In this article, we have covered the basics of GitHub and how to use it for your coding projects. We have learned how to:

- Set up a GitHub account and create a new repository.
- Make and commit changes to your code using branches and pull requests.
- Collaborate on projects with other developers using issues and wikis.
- Navigate the GitHub interface and explore its features.
- Leverage GitHub for your career growth by showcasing your work, contributing to open source projects, and building your personal brand.

I hope you have found this article helpful and informative. GitHub is a powerful tool that can help you improve your coding skills, collaborate with others, and create amazing software. So what are you waiting for? Start your GitHub journey today and unleash your coding potential!

Now get out there and change the world!
