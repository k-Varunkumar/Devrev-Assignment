## Creating a workitem using Devrev API

To create a workitem we require 4 compulsory fields: type, applies_to_part, owned_by and title. Then based on the type of the the workitem(issue/ticket) total fields may vary(12 for issue and 15 for ticket)

For more reference, please refer to the [documentation](https://developer.devrev.ai/api-reference/works/create)

### Getting started with the workitem
1. type: takes a string(ticket/issue).
2. title: takes a string, can be any name of your choice
3. applies_to_part: takes the ID as a string of the part to which workitem is related to
4. owned_by : takes an array of ID of the devusers to whom the workitem belongs to.

### Creating a Part
So there are 4 types in Part namely Capability, Enhancements, Feature and Product. First we have to create a Product part then using its id as the parent we can create other 3 types of parts.
For more reference, please refer to the [documentation](https://developer.devrev.ai/api-reference/parts/create)

### Getting devuser ID
To get the userID we can either use get/list to get the devuser ID
For more reference, please refer to the [documentation](https://developer.devrev.ai/api-reference/dev-users/get)

### Creating the workitem
Now with these 4 things with us we can finally create a workitem.
