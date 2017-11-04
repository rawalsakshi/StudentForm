var arr = [];
(function(APP) {
    APP.arr = [];

    APP.validate = function() {
            inputName = document.getElementById("nameId").value,
            inputContact = document.getElementById("contactId").value,
            inputEmail = document.getElementById("emailId").value;

        if (inputName == null || inputName == "") {
            alert("Name can't be blank");
        }
		else if (inputContact == null || inputContact == "") {
            alert("Contact can't be blank");
        }
		else if (inputEmail == null || inputEmail == "") {
            alert("Email can't be blank");
        }
		else if (APP.helper.validateEmail(inputEmail) === false) {
            alert("Please provide a valid email address");
        }
		else {
            APP.addRecord({
                name: inputName,
                phone: inputContact,
                email: inputEmail
            })
        }

    }

    APP.addRecord = function(arg) {
        arr.push({
            name: arg.name,
            phone: arg.phone,
            email: arg.email
        });

        APP.renderTemplate();
        document.getElementById("nameId").value = "";
        document.getElementById("contactId").value = "";
        document.getElementById("emailId").value = "";
    }

    APP.renderTemplate = function() {
        var i;
        document.getElementById("detail").innerHTML = "";
		
        for (i = 0; i < arr.length; i++) {
            var id = i;
            document.getElementById("detail").innerHTML += `<div class="card" style="width: 30rem;">
			<div class="card-body">
			<p class="card-text" style="display: inline" > Name: ${arr[i].name} , Contact: ${arr[i].phone} , Email: ${arr[i].email}
			<a href="#" class="btn btn-primary btn-sm" style="margin:0;display: inline" onclick="APP.deleteStudent(${id})">Delete</a> 
			</div>
			</div>`
	     }
	}

    APP.deleteStudent = function(index) {
        arr.splice(index, 1);
        console.log(arr);
        APP.renderTemplate();
    }

    APP.clearSearch = function() {
        APP.searchStudent.num = 0;
        document.getElementById("displaySearch").innerHTML = ""
    }

    APP.searchStudent = function() {
        document.getElementById("displaySearch").innerHTML = "";
        this.num = 0;
        var inptText = document.getElementById("searchText").value;
		
        if (inptText == "") {
            alert("Enter text");
        }
		else {
            var inptTextLow = inptText.toLowerCase();
            var flag = 0;
			
            for (j = 0; j < arr.length; j++) {
                var reg = new RegExp(inptTextLow, "g");

                var str = arr[j].name;
                var strlow = str.toLowerCase();
                var n = strlow.search(reg);

                var strr = arr[j].email;
                var strrlow = strr.toLowerCase();
                var m = strrlow.search(reg);
				
                if (n >= 0 || m >= 0) {
					
                    if (this.num == 0) {
						
						document.getElementById("displaySearch").innerHTML += `<div class="row">
						<div class="col" id="pq">
						<h2 style="display:inline">Search Result:</h2>
						<button type="submit" class="btn btn-primary btn-lg" onclick="APP.clearSearch()" style="float: right">Clear Search</button>
						<hr>
						<table class="table table-bordered" style="table-layout: fixed; word-wrap: break-word">
							<thead>
								<tr>
								<th scope="col">Name</th>
								<th scope="col">Contact</th>
								<th scope="col">Email</th>
								</tr>
							</thead>
						<tbody>
						<tr>
						<td>${arr[j].name}</td>
						<td>${arr[j].phone}</td>
						<td>${arr[j].email}</td>
						</tr>
						<tr>
						</tbody>
						</table>
						</div>
					</div>`
                        this.num++;
                    } else {

						document.getElementById("displaySearch").innerHTML += `<table class="table table-bordered" style="table-layout: fixed; word-wrap: break-word"> 
						   <tbody>
							<tr>
							<td>${arr[j].name}</td>
							<td>${arr[j].phone}</td>
							<td>${arr[j].email}</td>
							</tr>
							<tr>
							</tbody>
							</table>`
                    }
                    flag = 1;

                }
            }
					if (flag == 0) {
						alert("No such Name or Email Id exist");
					}
			
					document.getElementById("searchText").value = "";

        }
    }
})(window.APP = window.APP || {});