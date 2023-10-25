function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6M0S6Xcs64i":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwZ4NmrAy0MlR1xTKgxToLQPbmghN4LEhkXRocU-6pACTJAHVkgDPK_HZWTFWxscg9W/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v10q1attempts:player.GetVar("v10q1attempts"),v10q1answeredcorrect:player.GetVar("v10q1answeredcorrect"),v10q2attempts:player.GetVar("v10q2attempts"),v10q2answeredcorrect:player.GetVar("v10q2answeredcorrect"),v10q3attempts:player.GetVar("v10q3attempts"),v10q3answeredcorrect:player.GetVar("v10q3answeredcorrect")})
	}
	)
}

