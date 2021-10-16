# refactory-assignment
Created by: M. Abyan Rizqo
<br><br>
This repo is the part of Refactory Intensive Probation Assignment for Backend Learning Part.<br>
## 1. Logic Test Problem
Logic test contain in *__logic_test__* folder. Every probelm covered by diverent file.
* *fibonacci.py* cover Fibonacci problem
* *fizzbuzz.py* cover FizzBuzz problem
* *leapyear.py* cover Leap Year problem
* *palindrome.py* cover Palindrome problem
* *reversewords.py* cover Reverse Words problem
## 2. JSON Manipulation Problem
JSON manipulation contain in *__json_manipulation__* folder. 
JSON data contain in *inventories.js*.  Every problem covered in *json_manipulation.js*. Description of every function: 
1. *findMeetingRoomItems* cover "Find items in the Meeting Room" problem.
2. *findElectronicDevices* cover "Find all electronic devices" problem.
3. *findFurnitures* cover "Find all the furniture" problem.
4. *findByDate cover* "Find all items were purchased on 16 Januari 2020" problem.
5. *findBrownColors* cover "Find all items with brown color" problem.
## 2. Backend Problem
For easy testing, frontend part also covered but only in simple way. 
User data responses will be send in JSON format rather than html views.
### 2.1 Authentication with Google
#### Homepage
#####  Homepage Request <br>
 `GET /` Will get the homepage view <br>
#####  Homepage Response <br>
 Homepage view. 
Logout button will appear if session cookie valid (if not login with google button will appear)<br>
#####  Homepage Flowchart <br>
![Image](https://lh3.googleusercontent.com/-8Kot0ZUNGcI/YWow-v5KxVI/AAAAAAAAAAQ/clmC-TvaF8MnSinTWegVsLiMpnmCr9imACLcBGAsYHQ/2.png)
#### OAuth Google
##### OAuth Request <br>
 `GET /google-auth/` Will get the homepage view <br>
##### OAuth Response <br>
```
{
  "_id": "61******93329901c6ba0",
  "name": "M. Abyan Rizqo",
  "email": "r*****@**ail.com",
  "lastLogin": "2021-10-15T00:40:59.387Z",
  "createdAt": "2021-10-15T00:40:59.409Z",
  "updatedAt": "2021-10-15T00:40:59.409Z",
  "__v": 0
}
```

#####  Oauth Flowchart <br>
![Image](https://lh3.googleusercontent.com/-p3IgtutN-QQ/YWow-vbJ8dI/AAAAAAAAAAY/cv7oyLtMLaUbDODDtWtC-uq-30IExlyqACLcBGAsYHQ/3.png
)
#### Server
#####  Server Flowchart <br>
![Image](https://lh3.googleusercontent.com/-liUOY4IfVag/YWow-leFQDI/AAAAAAAAAAM/lamGkDsQzAclk8AfqOZRMl-CKMdaphBOwCLcBGAsYHQ/1.png)
### 2.2 CLI Application
CLI Applcation can get all users login info.<br>
#### Instalation
To install globally in your local computer run this command from base repository folder:

  npm i -g ./backend/bin
### Run the CLI App
After instalation, you can run the app by call:<br>

    refactory-assignment glu
this is equal to:<br>

    refactory-assignment get-login-users
If you wont install it globally, you can run this command command from base repository folder:

    node ./backend/bin get-login-users
Response of that request is:
```
List of login users:
-  r****@**il.com
-  a****@g**il.com
------------------------
```
or
```
Currently there is no user login

```
### Flowchart
![Image](https://lh3.googleusercontent.com/-laG-ULfs-2Q/YWow-iyzv4I/AAAAAAAAAAU/0QzkAMtJFmgoJ9wuiZ9eZYxrYmOxb0O5gCLcBGAsYHQ/4.png)
