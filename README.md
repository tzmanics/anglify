# Anglify: Netlify Schematics for your Angular Antics
Currently these schematics will ask you for your Netlify information and save it 
 to a `netlifyConfig.json`. Since this is sensitive information, 
 `netlifyConfig.json` will also be added to your `.gitignore` file so these
 credentials will not be shared publicly.

This v1 was made with the great guidance and help of @brocco & @jschwarty on 
their awesome stream: [twitch.tv/ngbs](twitch.tv/ngbs) 

### Unit Testing

`npm run test` will run the unit tests, using Jasmine as a runner and test framework.

### Publishing

To publish, simply do:

```bash
npm run build
npm publish
```

That's it!
 