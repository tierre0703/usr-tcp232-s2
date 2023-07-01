<!--
function FindAndSelect(selectBox, value)
{
  var i = 0;
  for(i = 0; i < selectBox.length; i++)
  {
    if(selectBox.options[i].value == value)
    {
      selectBox.selectedIndex = i;
      return;
    }
  }
}
function FindNearestAndSelect(selectBox, value)
{
  var i = 0;
  var min;
  var max;

  for(i = 0; i < selectBox.length; i++)
  {
    min = (value * 90) / 100;
    max = (value * 110) / 100;

    if((selectBox.options[i].value > min) && (selectBox.options[i].value < max))
    {
      selectBox.selectedIndex = i;
      return;
    }
  }
}
function SetFormsernet()
{
	FindAndSelect(document.config.hbcho, hbc);
	FindAndSelect(document.config.hhex, hhe);
	FindAndSelect(document.config.rbcho, rbc);
	FindAndSelect(document.config.rbcot, rbt);
	FindAndSelect(document.config.rhex, rhe);
	
	if(srq == 1)
	{
		document.config.srq.checked = true;	
	}
	else
	{
		document.config.srq.checked = false;
	}
	if(srr == 1)
	{
		document.config.srr.checked = true;	
	}
	else
	{
		document.config.srr.checked = false;
	}
	if(srt == 1)
	{
		document.config.srt.checked = true;	
	}
	else
	{
		document.config.srt.checked = false;
	}
	
	SetIPheatb();
	SetIPRegis();
	SetIPStata();
}
function SetFormDefaults()
{
	//FindNearestAndSelect(document.config.br, br);
	document.config.br.value = br;
	FindAndSelect(document.config.stop, sb);
	FindAndSelect(document.config.bc, bc);
	FindAndSelect(document.config.parity, par);
	
	FindAndSelect(document.config.tnmode, tnm);
	FindAndSelect(document.config.htpch, htpc);
	
	
	document.config.tlp.value = tlp;
	document.config.trp.value = trp;
	//document.config.srf.value = srf;
	// note: checkbox is only submitted when checked; otherwise no submit
	// value is meaningless
	if(sre == 1)
	{
		document.config.sre.checked = true;	
	}
	else
	{
		document.config.sre.checked = false;
		//document.config.srf.value = 1;
	}
	if(srf == 1)
	{
		document.config.srf.checked = true;	
	}
	else
	{
		document.config.srf.checked = false;
		//document.config.srf.value = 1;
	}
	if(srg == 1)
	{
		document.config.srg.checked = true;	
	}
	else
	{
		document.config.srg.checked = false;
		//document.config.srf.value = 1;
	}
	if(srh == 1)
	{
		document.config.srh.checked = true;	
	}
	else
	{
		document.config.srh.checked = false;
		//document.config.srf.value = 1;
	}
	if(htpd == 1)
	{
		document.config.htpd.checked = true;	
	}
	else
	{
		document.config.htpd.checked = false;
		//document.config.srf.value = 1;
	}
  	SetIPState();

}

function SetIPState()
{
	var tnmode = document.config.tnmode.value;
	var disable;
    var htpch = document.config.htpch.value;
	if((tnmode == 0)||(tnmode == 1)||(tnmode == 2)||(tnmode == 4)||(tnmode == 5)) //udp client, tcp client, UDP server, httpd client, TCP Auto
	{
		disable = false;
	}
	else
	{
		disable = true;
	}
	document.config.trp.disabled = disable;
	document.config.url1.disabled = disable;
   
	if((tnmode == 1)||(tnmode == 3)) //tcp client, tcp server
	{
		disable = false;
	}
	else
	{
		disable = true;
	}
	if(tnmode == 4) //tcp client, tcp server,httpd client
	{
		disable = false;
	}
	else
	{
		disable = true;
		FindAndSelect(document.config.htpch, 0);
	}
    document.config.htpch.disabled = disable;
	if(tnmode != 4)
	{
		document.getElementById("htp2").style.display="none";
		document.getElementById("htpgh").style.display="none";
		document.getElementById("htpph").style.display="none";
		document.getElementById("htp1").style.display="none";
		document.getElementById("htpurl1").style.display="none";
	}
	else
	{
		document.getElementById("htp2").style.display="table-row";
		document.getElementById("htp1").style.display="table-row";
		document.getElementById("htpurl1").style.display="table-row";
	    if(htpch!=0)
	   	{
			document.getElementById("htpgh").style.display="none";
			document.getElementById("htpph").style.display="table-row";
	   	}
	   	else
	   	{
			document.getElementById("htpgh").style.display="table-row";
			document.getElementById("htpph").style.display="none";
	    }
		
	}
	
}
function SetIPheatb()
{
	var hbcho = document.config.hbcho.value;
	var disable;
	var hhex = document.config.hhex.value;
	if((hbcho == 2)||(hbcho == 1)) //tcp client, tcp server
	{
		disable = false;
	}
	else
	{
		disable = true;
		FindAndSelect(document.config.hhex, 0);
	}
	document.config.hhex.disabled = disable;
	if(hbcho == 0)
	{
		document.getElementById("heacona").style.display="none";
		document.getElementById("heaconb").style.display="none";
		document.getElementById("heatime").style.display="none";
	}
	else
	{
		document.getElementById("heatime").style.display="table-row";
		if(hhex!=0)
	   	{
		 	document.getElementById("heacona").style.display="none";
			document.getElementById("heaconb").style.display="table-row";
	   	}
	   	else
	   	{
			document.getElementById("heacona").style.display="table-row";
			document.getElementById("heaconb").style.display="none";
	    }
	}
}
function SetIPRegis()
{
	var rbcho = document.config.rbcho.value;
	var disable;
	var rbcot = document.config.rbcot.value;
	var rhex = document.config.rhex.value;
	if((rbcho == 2)) //show hex or ascii
	{
		disable = false;
	}
	else
	{
		disable = true;
		FindAndSelect(document.config.rhex, 0);
	}
	document.config.rhex.disabled = disable;
	if((rbcho == 2)||(rbcho == 1)) //show  connect send or data with
	{
		disable = false;
	}
	else
	{
		disable = true;
		FindAndSelect(document.config.rbcot, 0);
	}
	document.config.rbcot.disabled = disable;
	if((rbcho == 0)||(rbcho == 1)||(rbcho == 3))
	{
		document.getElementById("regscona").style.display="none";
		document.getElementById("regsconb").style.display="none";
		if(rbcho == 0)
		{
			document.getElementById("regtype").style.display="none";
			document.getElementById("cloud1").style.display="none";
			document.getElementById("cloud2").style.display="none";
		}
		if(rbcho == 1)
		{
			document.getElementById("regtype").style.display="table-row";
			document.getElementById("cloud1").style.display="none";
			document.getElementById("cloud2").style.display="none";
		}
		if(rbcho == 3)
		{
			document.getElementById("regtype").style.display="none";
			document.getElementById("cloud1").style.display="table-row";	
			document.getElementById("cloud2").style.display="table-row";
		}
	}
	else
	{
		document.getElementById("regtype").style.display="table-row";
		document.getElementById("cloud1").style.display="none";
		document.getElementById("cloud2").style.display="none";
		if(rhex==0)
	   	{
		 	document.getElementById("regsconb").style.display="none";
			document.getElementById("regscona").style.display="table-row";
	   	}
	   	else
	   	{
			document.getElementById("regsconb").style.display="table-row";
			document.getElementById("regscona").style.display="none";
	    }
	}
}	
	


function SetIPStata()
{
	var obj = document.getElementById('mactp');
	var disable;
	if(obj.checked==true)
	{
		disable=true;	
	}
	else
	{
		disable=false;
	}			
	document.config.srn.disabled = disable;
	document.config.regis.disabled = disable;
}
function SetIPStata()
{
	var obj = document.getElementById('tcpcs');
	
	if(obj.checked==true)
	{
		document.getElementById("tcpcshort").style.display="table-row";	
	}
	else
	{
		document.getElementById("tcpcshort").style.display="none";
	}
}
//-->
