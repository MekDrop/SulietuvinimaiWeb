function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function closeNotification(obj) {
	setCookie('old-notification', true, 365);
	obj.style.display = 'none'; 
	return false;
}

if (document.location.hostname == 'sulietuvinimai.mekdrop.name' && !getCookie('old-notification'))
{
	document.write('<div style="background-color: yellow; padding: 0.5em; position: absolute;    width: 50%;    margin: 0 0;    left: 0;    top: 0;"><a href="#Uždaryti" onclick="return closeNotification(this.parentNode);" style="    float: right;    font-weight: bold;    color: white;    background: orange;    padding: 0 0.25em 0.25em;">x</a>  Šis tinklalapis buvo sukurtas bei atnaujintas labai seniai, todėl nemaža dalis informacijos šiai dienai jau pasenusi. Jis vis dar internete labiau dėl istorinių priežasčių nei turinio. <br /><br />Jei įdomus tinklalapio kodas galite jį pamatyti bei atsiųsti <a href="https://github.com/MekDrop/sulietuvinimai-website" target="_blank">GitHub tinklalapyje</a>. </div>');
}