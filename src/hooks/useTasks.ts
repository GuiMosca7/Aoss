import {useState, useEffect } from "react";
import { API_URL, MESSAGES } from "../utils/constants";
import type { Task, TaskFormData, UseTasksreturn} from "../types";

//Hook personalizado para gerenciamento completo de tarefas

export function useTasks(): UseTasksreturn{
    //estados para gerenciar o conjunto de tarefas e controles de interface
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [submitting, setSubmitting] = useState<boolean>(false);

    async function fetchTasks(): Promise<void> {
        setLoading(true);
        setError(null);
    try{
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Erro ao carregar tarefas')
        const data: Task[] = await response.json();
        setTasks(data);
    }catch (err){
        setError(MESSAGES.ERROR_LOAD);
        console.error('Error:', err)
    }finally{
            setLoading(false);
    }
    }
    async function createTask(taskData:TaskFormData): Promise<boolean> {
        if(!taskData.title.trim()) return false;

        setLoading(true);
        setError(null);
        try{
            const response = await fetch(API_URL, {
                method : "post",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify({taskData, completed: false }),
            });
        }
    }

    async function  toggleTask(id:number): Promise<void> { 
        try
        
    }
}
