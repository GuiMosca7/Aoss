export interface Task{
    id: number;
    title:string;
    description: string;
    completed: boolean;
    createdAt?: string;
    updateAt?: string;
}

export interface TaskFormData{
    title: string;
    description: string;
} 

export interface TaskFormProps {
    form: TaskFormData;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    submitting?: boolean;
}

export interface TaskListProps {
    tasks: Task[];
    loading: boolean;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

export interface TaskItemProps{
    task: Task;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

export interface ErrorMessageProps{
    error: string;
}

export interface UseTasksReturn{
    tasks: Task[];
    loading: boolean;
    error: string | null;
    submitting: boolean;
    createTask: (taskData : TaskFormData) => Promise<boolean> 
    toggleTasks: (id: number) => Promise<void>
    deleteTasks: (id: number) => Promise<void>
    fetchTasks: () => Promise<void>;
}

export interface Messages{
    LOADING: string;
    EMPTY_TITLE: string;
    EMPTY_DESCRIPTION: string;
    ERROR_LOAD: string;
    ERROR_CREATE: string;
    ERROR_UPDATE: string;
    ERROR_DELETE: string;
}