class ItemController {
    private items: { id: number; name: string; purchased: boolean }[] = [];
    private nextId: number = 1;

    public getItems(req: any, res: any) {
        res.render('shoppingList', { items: this.items });
    }

    public addItem(req: any, res: any) {
        const { name } = req.body;
        const newItem = { id: this.nextId++, name, purchased: false };
        this.items.push(newItem);
        res.redirect('/');
    }

    public deleteItem(req: any, res: any) {
        const { id } = req.params;
        this.items = this.items.filter(item => item.id !== parseInt(id));
        res.status(200).json({ message: 'Item deleted successfully' });
    }
}

export default new ItemController();