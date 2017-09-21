@extends('emails.templates.responsive')

@section('preheader', 'This is your weekly newsletter email from Lambda Phoenix Center.')

@section('title', 'News from Lambda Phoenix Center')

@section('email')

    <?php $pTag = '<p style="font: 12px/14px Helvetica, Arial, sans-serif">'; ?>

    <table>
        @foreach ($articles as $article)
            <tr>
                @if (empty($article->image))
                    <td colspan="2" style="padding: 20px 0;">
                        <h1 style="font:24px Helvetica, Arial, sans-serif; color: #9C659C">{{ $article->headline }}</h1>
                        {!! str_replace('<p>', $pTag, $article->body) !!}
                     </td>
                @else
                    <td style="width: 195px;padding: 20px 0;"><img style=" max-width: 180px;" src="http://{{ $_SERVER['HTTP_HOST'] }}/uploads/events/{{ $article->image }}" /></td>
                    <td style="vertical-align: top;padding: 20px 0;">
                        <h1 style="font:24px Helvetica, Arial, sans-serif; color: #9C659C; margin-top: 0;">{{ $article->headline }}</h1>
                        {!! str_replace('<p>', $pTag, $article->body) !!}
                    </td>
                @endif
            </tr>
        @endforeach
    </table>
@stop

