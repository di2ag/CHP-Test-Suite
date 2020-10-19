const newman = require('newman')
var fs = require('fs')

fs.writeFile('../web/status.txt', 'inactive', function(err)
{
    if (err)
    {
        console.log("status file not found")
    }
});

newman.run({
    collection: require('./perception-tests.postman_collection.json'),
    reporters: 'cli'
}, function (err) {
    if (err) 
    { 
        fs.writeFile('../web/status.txt', 'inactive', function(err)
        {
            if (err)
            {
                console.log("status file not found")
            }
        });
    }
    else{
        fs.writeFile('../web/status.txt', 'active', function(err)
        {
            if (err)
            {
                console.log("status file not found")
            }
        });
    }
    console.log('collection run complete!');
});