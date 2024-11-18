import { animal } from "../types/animal";
import supabase from "@/lib/supabase-client";
import Dashboard from './components/Dashboard';

async function fetchAnimals(){
  const { data, error } = await supabase.from('animals').select('*');
  if (error) {
    console.error('Error fetching data: ', error.message);
    return [{ id: 0, name: 'Error', description: 'Error fetching data', status: 'error' }];
  }
  return data as animal[];
}

export default async function Page() {
  const animals = await fetchAnimals();
  return (
    <div className="app">
      <h1>Welcome to the animal shelter dashboard!</h1>
      <Dashboard animals={animals} />
    </div>
  );
}
