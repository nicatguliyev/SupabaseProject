import axios from "axios";

const SUPABASE_URL = "https://mjqljwpntcygarpcnnmi.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qcWxqd3BudGN5Z2FycGNubm1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwMzg4NDcsImV4cCI6MjA3ODYxNDg0N30.hVOn6m9sj-UdlmgXPoyIdMwLJ91L9jSeH-mpT0Pk444";   

const api = axios.create({
    baseURL: SUPABASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_ANON_KEY
    }
});

export default api;