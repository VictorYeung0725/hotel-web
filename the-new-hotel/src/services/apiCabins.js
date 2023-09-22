import supabase from './superbase';

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.log(error);
    throw new Error('Cabins can not be loaded');
  }

  return data;
}

export async function deleteCabins(id) {
  const { data, error } = await supabase
    .from('cabins')
    .delete()
    // .eq('some_column', 'someValue');
    .eq('id', id);

  if (error) {
    console.log(error);
    throw new Error('Cabins can not be loaded');
  }

  return data;
}
