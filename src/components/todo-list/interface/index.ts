export interface InitShape {
    todolist: Array<string>
}

export interface ActionShape {
    type: string;
    payload: any;
}

export interface ReducerShape {
    (state: InitShape, action: ActionShape ): InitShape
}