Feature: Steps run/execute existing cypress test scripts

Step 1: open new terminal in visual studio code with existing project 
Step 2: enter command "npx cypress open" to open cypress test runner
Step 3: The test runner opens in different window 
Step 4: The cypress test runner shows all the written test scripts under integration/tests folder 
Step 5: Select the test script to execute (ex: createNewAccount.js)
Step 6: Then select another test script to run after createNewAccount which is login.js 
Step 7: Then select next test script to run negative scenarios which is invalidCreateNewAccount.js 
Step 8: Then select another negative test script to run which is invalidLoginDetails.js 
Step 9: So that all the test scripts are executed and tested one by one as a work flow.