import { PlusCircle } from 'phosphor-react'
import { FiClipboard } from 'react-icons/fi'

import { Container, Content, Main, Input, Title, SectionOn, Lixo } from './styles';

import { useState } from 'react';

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

export function Body() {
  
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  
  const totalTask = tasks.filter(task => task.id !== 0)
  
  const taskComplete = tasks.filter(task => task.isComplete === true)
  
  function handleCreateNewTask() {
    if(!newTaskTitle) return;

    const newTask = {
      id: Math.random(),
      title: newTaskTitle,
      isComplete: false
    }

    setTasks(oldState => [...oldState, newTask]);
    setNewTaskTitle('');
    
  }

  function handleToggleTaskCompletion(id: number) {
    const newChecked = tasks.map(task =>task.id === id ? {
      ...task,
      isComplete: !task.isComplete
    } : task);

    setTasks(newChecked)
  }

  function handleRemoveTask(id: number) {
    const filteredTask = tasks.filter(task => task.id !== id);
    
    setTasks(filteredTask)
  }

  return (
    <Container>

      <Input>
        <input 
          type="text" 
          placeholder='Adicione uma nova tarefa'
          onChange={(e) => setNewTaskTitle(e.target.value)}
          value={newTaskTitle}
        />
        <button type="submit" onClick={handleCreateNewTask}>
          Criar
          <PlusCircle size={20} />
        </button>
      </Input>
    
      <Title>
        <h1>Tarefas criadas <span>{totalTask.length}</span></h1>
        <h2>Concluidas <span>{taskComplete.length} de {totalTask.length}</span></h2>
      </Title>

      <body>
        {!totalTask.length ? (
        <SectionOn>
          <div><FiClipboard size={56} color='#808080'/></div>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </SectionOn>
        ): null}
      </body>
      
      <Main>
        <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <Content className={task.isComplete ? 'completed' : ''}>
              <input 
              type="checkbox" 
              readOnly
              checked={task.isComplete}
              onClick={() => handleToggleTaskCompletion(task.id)}
              />
              <p>{task.title}</p>
            </Content>

            <button 
            type='button'
            onClick={() => handleRemoveTask(task.id)}
            >
            <Lixo />
            </button>
          </li>
        ))}
        </ul>
      </Main>
    </Container>
  );
}