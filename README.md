# Instructions
To run the project run the following commands
```
npm i
```
```
npm start
```

### Pros of this approach
1. It identifies if the url is from a third party API or not
2. Uses a well documented and maintained library for parsing the csv files

Feature  | Explanation
------------- | -------------
Takes a CSV file as an input, URL or file  | With this approach the function reads the url, then it checks if the url begins with http or not, if it does we assume it is a third party url which we read as text coming from the response of the http request and after that we parse it using node-csv; if it is not an http url we assume it is a local file and we use node-csv to parse the file.
Transformer function  | After the file is parsed we call the transformer function in the callback function node-csv gives us in its parse functions.
Run a hook before  | n/a
Run a hook after  | n/a
Capture the time  | n/a
