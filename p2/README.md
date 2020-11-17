# Project 2
+ By: Han Zeng
+ Production URL: [Blog](https://e28p2.aboringanduselesswebsite.com/)

## Pages summary
- Homepage (`PostList.vue`): presents the posts retrieved from the server.
- Post detail (`PostReader.vue`): shows the detail of a post.
- Post composer (`PostWriter.vue`): compose new post and update server data.

## SFC summary
- `App.vue`: app root.
- `PostList.vue`: presents the posts retrieved from the server.
- `PostReader.vue`: shows the detail of a post.
- `PostWriter.vue`: compose new post and update server data.
  
## Server interaction
- Retrieve all posts: send a `GET` request to `https://excel.aboringanduselesswebsite/posts/posts/`
- Create new post: send a `POST` request to `https://excel.aboringanduselesswebsite/posts/posts/`

## Outside resources
+ [How to center things](https://www.w3schools.com/howto/howto_css_center-vertical.asp)
+ [Django backend setup](https://docs.djangoproject.com/en/3.1/intro/tutorial03/)
+ [Django rest framework](https://www.django-rest-framework.org/tutorial/quickstart/)

## Notes for instructor
- Setup my own backend using a simple Django Rest framework.
