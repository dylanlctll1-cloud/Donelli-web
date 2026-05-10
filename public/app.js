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