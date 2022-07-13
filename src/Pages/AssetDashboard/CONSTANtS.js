export const initialData = {
    tasks : {
        'task-1' : { id : 'task-1', content : 'Laptop'},
        'task-2' : { id : 'task-2', content : 'Mac'},
        'task-3' : { id : 'task-3', content : 'HP'},
        'task-4' : { id : 'task-4', content : 'Laptop'},
        'task-5' : { id : 'task-5', content : 'Lenovo'},
        'task-6' : { id : 'task-6', content : 'Laptop'},
    },
    columns : {
        'column-1' : { id : 'column-1', title : 'In-stock', tasks : ['task-1', 'task-2']},
        'column-2' : { id : 'column-2', title : 'New', tasks : []},
        'column-3' : { id : 'column-3', title : 'Assigned', tasks : []},
        'column-4' : { id : 'column-4', title : 'In-repair', tasks : []},
        'column-5' : { id : 'column-5', title : 'Broken', tasks : []},
    },
    columnOrder : ['column-1', 'column-2', 'column-3', 'column-4', 'column-5']
}