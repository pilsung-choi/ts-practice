{
    type ToDo = {
        title: string;
        description: string;
        label: string;
        priority: 'high' | 'low';
    };

    function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
        return { ...todo, ...fieldsToUpdate };
    }
    const todo: ToDo = {
        title: 'learn TypeScript',
        description: 'study hard',
        label: 'study',
        priority: 'high',
    };
    const updated = updateTodo(todo, { priority: 'low' });
    console.log(updated);
    // partial type은 기존에 있는 타입에서 일부만 변경하고 싶을 때 쓴다.
}