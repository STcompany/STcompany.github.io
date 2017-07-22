<?php

// указываем параметры для подключения к MySQL
// подключаемся к БД MySQL
$link = mysqli_connect(HostName, UserName, Password, DBName);

define("db_prefix","pb_");

function is_sel($a, $field)
{
  $b = isset($_POST[$field])?$_POST[$field]:NULL;
  if($a == $b) return 'selected="selected"';
}

$res = mysqli_query($link, 'SELECT * FROM locality WHERE parent_id=NULL');
?>
<form id="frm" method="post">
<!--<select name="country" onchange="document.getElementById('frm').submit()" >
<option value='null'>- Выберите страну -</option>-->

<select name="city" onchange="document.getElementById('frm').submit()" >
<option value='null'>- Выберите область -</option>

<?
// выводим все строки для которых parent_id=NULL
    while($row = mysqli_fetch_assoc($res))
      echo "<option ".is_sel($row['id'],'title')." value='" . $row['id'] . "'>" . $row['title'] . "</option>\r\n";
echo "</select>";

//if(isset($_POST['country']))
//{
  $res=mysqli_query($link, 'SELECT * FROM '.db_prefix.'locality WHERE country="'.mysql_real_escape_string($_POST['country']).'"');

  if(mysqli_num_rows($res)){

  echo "<select name=\"region\" onchange=\" document.getElementById('frm').submit();\" >
    <option  id=\"region\" value='0'>- Выберите pегион -</option>";

    while($row = mysqli_fetch_assoc($res))
      echo "<option ".is_sel($row['id'],'region')." value='" . $row['id'] . "'>" . $row['name'] . "</option>\r\n";

  echo "</select>";

  }else{ // выбираю города без учета региона

  $res=mysqli_query($link, 'SELECT * FROM '.db_prefix.'city WHERE country='.mysql_real_escape_string($_POST['country']));

  echo "<select id=\"city\" name=\"city\" onchange=\"document.getElementById('frm').submit()\" >
    <option  value='0'>- Выберите город -</option>";

    while($row = mysqli_fetch_assoc($res))
      echo "<option ".is_sel($row['id'],'city')." value='" . $row['id'] . "'>" . $row['name'] . "</option>\r\n";

  echo "</select>";

  }

//}

$region = isset($_POST['region'])?$_POST['region']:NULL;
if($region && $region !== 0)
{
  $res=mysqli_query($link, 'SELECT * FROM '.db_prefix.'city WHERE area='.(int)$_POST['region']);

  echo "<select id=\"city\" name=\"city\" onchange=\"document.getElementById('frm').submit()\" >
    <option  value='0'>- Выберите город -</option>";

    while($row = mysqli_fetch_array($res))
      echo "<option ".is_sel($row['id'],'city')." value='" . $row['id'] . "'>" . $row['name'] . "</option>\r\n";

  echo "</select>";

}
?>
</form>
<?
$city = isset($_POST['city'])?$_POST['city']:NULL;
if($city && $city !== 0)
{
  $res=mysqli_query($link, 'SELECT * FROM '.db_prefix.'city WHERE id='.(int)$_POST['city'].' LIMIT 1');
  $row = mysqli_fetch_array($res);
  echo "<h1>Хочу в ".$row['name']."!</h1>";
}

?>