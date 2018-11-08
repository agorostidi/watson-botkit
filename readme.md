# watson-botkit
# THIS IS EXPERIMENTAL SOFTWARE

This is an experimental and in-development version of Botkit using the Watson Assistant Middleware. Both this starter kit and the related functionality in Botkit are currently incomplete.

However, it works! And we welcome your input.

See [this Github Issue](https://github.com/agorostidi/watson-botkit/issues) to track progress on this project.

Check [Watson Assistant BotKit midleware](https://github.com/watson-developer-cloud/botkit-middleware/) in order to check how Watson Assistant is used

Please, do not forget to follow the pre-requisites above and create your own Watson Assistant

# Botkit Starter Kit for Web Bots

This repo contains everything you need to get started building a bot with Botkit and Botkit Studio!

[Botkit Studio](https://studio.botkit.ai/signup?code=webstarter) is a set of tools that adds capabilities
to the open source Botkit library by offering hosted GUI interfaces for script
management and action trigger definition. Botkit Studio is built by the company
that created and maintains the open source Botkit library, [Howdy.](https://howdy.ai)


### What's Included
* [Botkit core](https://github.com/howdyai/botkit/blob/master/docs/readme.md#developing-with-botkit) - a complete programming system for building conversational software
* [Botkit Studio API](https://github.com/howdyai/botkit/blob/master/docs/readme-studio.md#function-index) - additional APIs that extend Botkit with powerful tools and APIs
* [Pre-configured Express.js webserver](https://expressjs.com/) including:
   * A customizable "Install my Bot" homepage
   * Webhook endpoints for communicating with platforms
* Sample skill modules that demonstrate various features of Botkit
* A sample web chat client

## Prerequisites

1. Sign up for an [IBM Cloud account](https://console.bluemix.net/registration/).
1. Download the [IBM Cloud CLI](https://console.bluemix.net/docs/cli/index.html#overview).
1. Create an instance of the Watson Assistant service and get your credentials:
    - Go to the [Watson Assistant](https://console.bluemix.net/catalog/services/conversation) page in the IBM Cloud Catalog.
    - Log in to your IBM Cloud account.
    - Click **Create**.
    - Click **Show** to view the service credentials.
    - Copy the `apikey` value, or copy the `username` and `password` values if your service instance doesn't provide an `apikey`.
    - Copy the `url` value.

1. Create a workspace using the Watson Assistant service and copy the `workspace_id`.

Once you have create your own Watson Assistant instance, you may setup your first dialog there  (that will be used by the chatbot).  Insert the credentials of Watson Assistant on your  `.env` file so it points to that dialog.


### Get Started

Clone this repository:

`git clone https://github.com/agorostidi/watson-botkit.git`

Install dependencies, including [Botkit](https://github.com/howdyai/botkit):

```
cd watson-botkit
npm install
```

OPTIONAL: Get a Botkit Studio token [from your Botkit developer account](https://studio.botkit.ai/)

Update the `.env` file with your newly acquired token. Also, set the `PORT` to 3000, or your port of choice.
 

Launch your bot application by typing:

`node .`

Now, visit your new bot's login page: http://localhost:3000

You should see a chat window! Your bot should leap to attention and start talking! YOU MAY HAVE JUST CREATED SKYNET.

If you prefer, you can go the page http://localhost:3000/embedded.html to see a version of the chatbot embeed on a web page.

### Extend This Bot

This repo is designed to provide developers a robust starting point for building a custom bot. Included in the code are a set of sample bot "skills" that illustrate various aspects of the Botkit SDK features.  Once you are familiar with how Botkit works, you may safely delete all of the files in the `skills/` subfolder.

Developers will build custom features as modules that live in the `skills/` folder. The main bot application will automatically include any files placed there.

A skill module should be in the format:

```
module.exports = function(controller) {

    // add event handlers to controller
    // such as hears handlers that match triggers defined in code
    // or controller.studio.before, validate, and after which tie into triggers
    // defined in the Botkit Studio UI.

}
```

### Customize Storage

By default, the starter kit uses a simple file-system based storage mechanism to
record information about the teams and users that interact with the bot. While
this is fine for development, or use by a single team, most developers will want
to customize the code to use a real database system.

There are [Botkit plugins for all the major database systems](https://github.com/howdyai/botkit/blob/master/docs/readme-middlewares.md#storage-modules) which can be enabled with just a few lines of code.

