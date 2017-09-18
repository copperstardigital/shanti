<?php namespace App\Http\Controllers\Vue;

use App\Http\Controllers\Controller;
use App\Http\Requests\MailChimpRequest;
use Illuminate\Http\Request;
use Mailchimp;
use Mailchimp_List_AlreadySubscribed;

class MailChimpController extends Controller {

    /**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		//
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

    /**
     * Store a newly created resource in storage.
     *
     * @param MailChimpRequest $request
     * @return Response
     */
	public function store(Request $request)
	{
        $this->validate($request, [
            'email' => 'required|email'
        ]);

        try {
            $mailchimp = new Mailchimp(getenv('MAILCHIMP_API_KEY'));
            $mailchimp->lists->subscribe(getenv('MAILCHIMP_LIST_ID'), ['email' => $request->get('email')], null, 'html');
            return response()->json(['success' => true, 'message' => 'You have been subscribed to our email list.']);
        } catch (Mailchimp_List_AlreadySubscribed $e) {
            return response()->json(['success' => false, 'message' => $e->getMessage()]);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => $e->getMessage()]);
        }

	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}