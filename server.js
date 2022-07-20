import express from 'express'
import routes from './src/routes'

const app = express();
const port = 3300;

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

routes(app);

app.use(function (err, req, res, next) {
    const message = err.message;

    res.status(err.status || 500);
    res.json({
        status: false,
        error: err,
        msg: message
    });
});

app.use(function (req, res, next) {
    res.status(404);

    res.json({
        status: false,
        error: '404',
        msg: 'No API Available'
    });
});

app.listen(port, () => {
    console.log(`you are server is running on ${port}`);
})