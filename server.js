const express = require("express")
const app = express()

app.get('/api/users', (req, res) =>
    // res.send("HELLO FROM EXPRESS 22")
    res.json([
            {username: 'Serhij Zolotukhin 1'},
            {username: 'Serhij Zolotukhin 2'},
            {username: 'Serhij Zolotukhin 3'}
        ]
    )
);

app.listen(8082, () =>
    console.log("Example app listening on port 3000!")
);