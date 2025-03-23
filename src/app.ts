import express from 'express';
import path from 'path';
import session from 'express-session';
import ItemController from './controllers/itemController'; // Rename TodoController to ItemController

declare module 'express-session' {
    interface SessionData {
        isAuthenticated?: boolean;
    }
}


const app = express();
const PORT = process.env.PORT || 3000;

const adminUsername = 'admin'; // Replace with environment variable if needed
const adminPassword = '123456789'; // Replace with environment variable if needed
const sessionSecret = 'SUPER_SECRET'; // Replace with a secure secret
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use(
    session({
        secret: sessionSecret, // Replace with a secure secret
        resave: false,
        saveUninitialized: true,
    })
);

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware to protect routes
function isAuthenticated(req: any, res: any, next: any) {
    if (req.session.isAuthenticated) {
        return next();
    }
    res.redirect('/login');
}

// Login route
app.get('/login', (_req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === adminUsername && password === adminPassword) {
        req.session.isAuthenticated = true;
        return res.redirect('/items');
    }

    res.render('login', { error: 'Invalid credentials' });
});

// Logout route
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
});

// Protect /items routes
app.get('/items', isAuthenticated, ItemController.getItems.bind(ItemController));
app.post('/items', isAuthenticated, ItemController.addItem.bind(ItemController));
app.delete('/items/:id', isAuthenticated, ItemController.deleteItem.bind(ItemController));

// Home route
app.get('/', (_req, res) => {
    res.redirect('/items');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});