import supabase from './supabase';

export async function getData() {
  let {data, error} = await supabase.from('data').select('*');

  if (error) {
    console.error(error);
    throw new Error('something went wrong while fetching data');
  }

  return data;
}

export async function postingData() {}
