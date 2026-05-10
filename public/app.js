import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const supabase = createClient(
  'https://xxxxx.supabase.co',
  'sb_publishable_NRgY-vUIROvY0pZ_Zmy_xg_dX5Pucbh'
)

window.login = async function () {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  console.log("DATA:", data)
  console.log("ERROR:", error)

  if (error) {
    document.getElementById('error').innerText = "Identifiants incorrects"
  } else {
    alert("Connexion réussie 🔥")
  }
}