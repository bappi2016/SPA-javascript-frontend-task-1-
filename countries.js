let countries = `
<div class="container">
<div class="panel panel-primary">
        <div class="panel-heading">GET Request of all countries</div>
        <div class="panel-body">
          <button class="btn btn-primary" onclick="performGetRequest1()">Get Country</button>
          <button class="btn btn-warning" onclick="clearOutput()">Clear</button>
          <table>
            <thead>
              <tr>
                <td>Country</td>
                <td>Continent</td>
                <td>Native Language</td>
                <td>Other Language</td>
              </tr>
            </thead>
            <tbody id="getResult1"></tbody>
          </table>
        </div>
      </div>
    </div>
`