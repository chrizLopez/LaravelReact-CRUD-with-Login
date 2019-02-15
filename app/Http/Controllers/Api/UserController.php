<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $result = User::all();
        return $result;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = new User;
        $user->name = $request->fullname;
        $user->email = $request->email_add;
        $user->address = $request->address;
        $user->description = $request->description;
        $user->gender = $request->gender;
        $user->password = md5($request->password);
        $user->user_type_id = $request->user_type_id;
        $user->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return User::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $user = User::find($request->user_id);
        $user->name = $request->fullname;
        $user->email = $request->email_add;
        $user->address = $request->address;
        $user->description = $request->description;
        $user->gender = $request->gender;
        if ($request->password !== '') {
            $user->password = md5($request->password);
        }
        $user->user_type_id = 2;
        $user->update();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return User::destroy($id);
    }

    public function check_login(Request $request)
    {
        $res = User::where('email', $request->email_add)
               ->where('password', md5($request->password))
               ->first();
        return $res;
    }
}
