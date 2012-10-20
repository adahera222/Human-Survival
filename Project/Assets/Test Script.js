#pragma strict

var controller : CharacterController;
var moveVector : Vector3;

function Start () 
{
  controller = GetComponent(CharacterController);
}

function Update () 
{
	moveVector = Vector3(0,-9.81,0)*Time.deltaTime;
	
	if(Input.GetKey("up"))
	{
		moveVector+=50*transform.TransformDirection(Vector3.forward)*Time.deltaTime;
	}
	var rot = Quaternion.identity;
	if(Input.GetKey("left"))
	{	
		rot.eulerAngles = Vector3(0, -50*Time.deltaTime, 0);
		transform.rotation *= rot;
	}
	else if(Input.GetKey("right"))
	{	
		rot.eulerAngles = Vector3(0, 50*Time.deltaTime, 0);
		transform.rotation *= rot;
	}
	
	controller.Move(moveVector);
}

function OnGUI () 
{
	if (GUI.Button (Rect(10,10,150,100), "I am a button")) 
	{
		var fwd = transform.TransformDirection (Vector3.forward);
    	if (Physics.Raycast (transform.position, fwd, 10)) 
    	{
        	print ("There is something in front of the object!");
   		}
	}
}