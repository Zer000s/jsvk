function sendDATA()
{
    var log = document.getElementById('index_email');
    var pas = document.getElementById('index_password');
    fetch
    ('/api/createuser', 
        {
            method: 'POST',
            headers: 
            {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify
            (
                {
                    log: log.value,
                    pas: pas.value,
                }
            )
        }
    )
}