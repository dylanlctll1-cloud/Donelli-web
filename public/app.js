console.log("JS CHARGÉ");
import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const supabase = createClient(
  'https://finflxwozcdhomynmcfo.supabase.co',
  'sb_publishable_NRgY-vUIROvY0pZ_Zmy_xg_dX5Pucbh'
)
async function login() {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
  
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
  
    if (error) {
      document.getElementById('error').innerText = error.message
      console.log(error)
    } else {
      alert("Connexion réussie 🔥")
    }
  }