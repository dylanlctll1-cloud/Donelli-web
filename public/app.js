import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabase = createClient(
  'https://finflxwozcdhomynmcfo.supabase.co',
  'sb_publishable_NRgY-vUIROvY0pZ_Zmy_xg_dX5Pucbh'
)
async function login() {
    const email = document.getElementById('username').value
    const password = document.getElementById('password').value
  
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
  
    if (error) {
      document.getElementById('error').innerText = "Identifiants incorrects"
    } else {
      alert("Connexion réussie 🔥")
    }
  }