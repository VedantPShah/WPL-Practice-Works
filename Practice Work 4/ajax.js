function loadXMLDoc() 
    	{
			var xmlhttp = new XMLHttpRequest();
			xmlhttp.onreadystatechange = function() 
			{
				if (this.readyState == 4 && this.status == 200) 
				{
		      		myFunction(this);
		    	}
		  	};
		  	xmlhttp.open("GET", "movies.xml", true);
		  	xmlhttp.send();
		}
		
		function myFunction(xml) 
		{
  			var i;
  			var xmlDoc = xml.responseXML;
  			var table="<tr><th>Title</th><th>Genre</th><th>Director</th><th>Cast</th><th>Short Description</th><th>IMDB Rating</th></tr>";
  			var x = xmlDoc.getElementsByTagName("movie");

  			for (i = 0; i <x.length; i++) 
  			{ 
    			table += "<tr><td>" +
    			x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
    			"</td><td>";
    			
    			var g = x[i].getElementsByTagName("genre");
    			for(var j = 0; j<g.length;j++)
    			{
    				if(j== g.length - 1)
    				{
    					table += g[j].childNodes[0].nodeValue;
    				}
    				else
    				{
    					table += g[j].childNodes[0].nodeValue+", ";
    				}
    			};
    			
    			table += "<td>"+x[i].getElementsByTagName("director")[0].childNodes[0].nodeValue +
    			"</td><td>";

    			var c = x[i].getElementsByTagName("cast")[0];
				var p = c.getElementsByTagName("person");
				for(var j = 0; j<p.length;j++)
    			{
    				if(j== p.length - 1)
    				{
    					table += p[j].getAttribute("role")+" Played by "+p[j].getAttribute("name");
    				}
    				else
    				{
    					table += p[j].getAttribute("role")+" Played by "+p[j].getAttribute("name")+", ";
    				}
    			};

    			table += "<td>"+x[i].getElementsByTagName("synopsis")[0].childNodes[0].nodeValue +
    			"</td><td>";

    			table += x[i].getElementsByTagName("score")[0].childNodes[0].nodeValue +
    			"</td></tr>";
  			}

  		document.getElementById("display").innerHTML = table;
		}